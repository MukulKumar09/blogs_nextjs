"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import addPost from "@/app/helpers/addPost";
import SnackbarProvider, { useSnackbar } from "react-simple-snackbar";

export default function NewPost() {
  const { push } = useRouter();
  const [image, setImage] = useState(null);
  const [openSnackbar, closeSnackbar] = useSnackbar();

  function handleImage(event) {
    const img = event.target.files[0];
    if (!img) return;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImage(fileReader.result);
    };
    fileReader.readAsDataURL(img);
  }

  async function handleForm(event) {
    openSnackbar("Creating post...");
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      const res = await addPost(formData);
      const res_json = await res.json();
      if (res.status == 200) {
        openSnackbar("Post Created.");
        push("/posts/" + res_json.id);
      } else {
        throw new Error(res);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleForm}>
      <div className="flex flex-col gap-10">
        <p className="text-3xl">Create New Post</p>
        <input type="text" name="title" placeholder="Title" className="input" />
        <input
          type="text"
          name="content"
          placeholder="Content"
          className="input"
        />
        {image && (
          <Image alt="placeholder" src={image} width={200} height={200} />
        )}
        <input type="file" name="image" onChange={handleImage} />
        <div className="flex gap-5">
          Featured?
          <input type="checkbox" name="isFeatured" />
        </div>
        <div className="flex gap-3 justify-end">
          <input type="submit" value="Post" className="btn" />
          <input
            type="button"
            onClick={() => push("/")}
            value="Cancel"
            className="btn-dark"
          />
        </div>
      </div>
    </form>
  );
}
