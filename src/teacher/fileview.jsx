// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';

function FileView() {
  return (
    <aside className="fileviewer">
      <div className="top">
        <button onClick={()=>{
            document.querySelector(".teacher .fileviewer").style.display = "none"
        }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
<span>Go Back</span></button>
        <img src="/folder.png" alt="" />
        <h2>Folder Name</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

        <img src="/docImg.webp" alt="" />
        <h1>FileName</h1>
      </div>
      <iframe src="/book.pdf"></iframe>
    </aside>
  );
}

export default FileView;
