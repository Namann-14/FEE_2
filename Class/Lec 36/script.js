const URL = 'https://www.xyz.com/abc.mp3';
let newURL;

const downloadFile = (URL, download) => {
    console.log("Started Downloading...");
    setTimeout(() => {
        newURL = URL.split('/').pop()
        download(newURL, compressFile);
    }, 2000);
};

const compressFile = (URL) => {
    console.log("File is being compressed...");
    setTimeout(() => {
        newURL = URL.split('/').pop().replace('.mp3', '.zip');
        console.log(`File: ${newURL} is compressed`);
        uploadFile(newURL);
    }, 2000);
};

const uploadFile = (compressedFile) => {
    setTimeout(() => {
        console.log(`Uploading ${compressedFile} to server...`);
        console.log("All work done!!")
    }, 2000);
};

const download = (newURL, compressFile) => {
    console.log(`File: ${newURL} is downloaded!`);
    setTimeout(() => {
        compressFile(URL);
    }, 2000);
};

downloadFile(URL, download);
