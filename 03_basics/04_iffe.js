// Named IFFE
(function one() {
  console.log(`DB Connected`);
})();
// ; -> at the end of IFFE is required to tell it the end of context

((port) => {
  console.log(`Server Running at PORT ${port}`);
})(3000);
