const canvas = document.createElement("canvas");
const ctx = canvas.getContext('2d');

function encodePngAsRGBA(element) {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    const img = document.createElement("img");
    img.onload = () => {
      const w = img.naturalWidth, h = img.naturalHeight;
      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, w, h);
      const arr = Uint8ClampedArray.from(imgData.data);
      // do something with arr
      console.log(`image width: ${w}, image height: ${h}, expected raw data size (w x h x 4): ${w * h * 4}, actual size: ${arr.length}`);
      console.log(arr);
    };
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
}
