import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import { uploadReviewImages } from "../../../firebase";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
export default function UploadImages({ imageUploaded, fileList, setFileList }) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => {
    console.log("Handle change called!");
    console.log("newFileList :: ", newFileList);
    setFileList(newFileList);
    if (newFileList && newFileList.length > 0) {
      imageUploaded(true);
    } else {
      imageUploaded(false);
    }
  };
  const uploadButton = (
    <div className="text-gray-500">
      <PlusOutlined />
      <div className="mt-2">Add images</div>
    </div>
  );

  const handleUpload = async ({ onError, onSuccess, file }) => {
    //TODO Upload all images to Firebase after DONE button is clicked
    console.log("customRequest :: ", file);
    const dataUrl = await getBase64(file);
    uploadReviewImages(dataUrl, file.name)
      .then((res) => {
        console.log("filelist :::: ", fileList, file);
        file.status = "done";
        onSuccess(null, file);
      })
      .catch((err) => onError(err));
  };

  return (
    <div className="mt-4">
      <Upload
        // action={handleUpload}
        customRequest={handleUpload}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 3 ? null : uploadButton}
      </Upload>
      <Modal
        open={previewOpen}
        // title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </div>
  );
}
