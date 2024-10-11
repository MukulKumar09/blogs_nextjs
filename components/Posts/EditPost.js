"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import editPost from "@/app/helpers/editPost";
import postImage from "@/app/helpers/postImage";
import { useSnackbar } from "react-simple-snackbar";

import Image from "next/image";

export default function EditPost({ post }) {
  const { push } = useRouter();
  const { _id, title, content, isFeatured, extension } = post;
  const path = "/posts/" + _id;
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const [image, setImage] = useState("");
  useEffect(() => {
    async function asyncFetch() {
      const res = await fetch(`/api/blobs/get-single/${_id}`);
      const imageRes = await res.json();
      console.log("response \n\n\n\n", imageRes);
      if (imageRes[0]) setImage(imageRes[0].url);
    }
    asyncFetch();
  }, []);

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
    event.preventDefault();
    openSnackbar("Saving post...");

    try {
      const formData = new FormData(event.target);
      const res = await editPost(formData);
      if (res.status == 200) {
        openSnackbar("Post Saved.");
        push(path);
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
        <p className="text-3xl">Edit Post</p>
        <Image alt="placeholder" src={image} width={200} height={200} />
        <input type="file" name="image" onChange={handleImage} />
        <input type="hidden" name="id" defaultValue={_id} />
        <input
          type="text"
          name="title"
          defaultValue={title}
          className="input"
        />
        <textarea name="content" className="input">
          {content}
        </textarea>
        <div className="flex gap-5">
          Featured?
          <input
            type="checkbox"
            name="isFeatured"
            defaultChecked={isFeatured ? true : false}
          />
        </div>
        <div className="flex gap-3 justify-end">
          <input type="submit" defaultValue="Save" className="btn" />
          <input
            type="button"
            onClick={() => push(path)}
            defaultValue="Cancel"
            className="btn-dark"
          />
        </div>
      </div>
    </form>
  );
}
