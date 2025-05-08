import { storage } from "./firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const uploadFile = (file) => {
  const storageRef = ref(storage, `uploads/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Upload is ${progress}% done`);
    },
    (error) => {
      console.error("Upload failed:", error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at:", downloadURL);
      });
    }
  );
};

export { uploadFile };
