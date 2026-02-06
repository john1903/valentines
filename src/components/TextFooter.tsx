export default function TextFooter() {
  return (
    <>
      {/* Left Text */}
      <h1
        className="absolute left-10 bottom-5 transform -translate-y-1/2 text-white text-4xl lg:text-5xl font-bold leading-tight font-playfair"
      >
        <span className="text-gray-400">Dopasuj</span> <br /> pary zdjęć
      </h1>

      {/* Right Text */}
      <h1
        className="absolute right-10 bottom-5 transform -translate-y-1/2 text-white text-4xl lg:text-5xl font-bold leading-tight text-right font-playfair"
      >
        aby odkryć <br /> <span className="text-gray-400">niespodziankę</span>
      </h1>

      {/* Copyright */}
      <p className="absolute bottom-5 right-5 text-white text-sm opacity-15 hover:opacity-50">
        © {new Date().getFullYear()}{" "}
        <a href="https://visibait.com">visibait.com</a>
      </p>
    </>
  );
}
