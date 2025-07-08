export default function MapIframe() {
  return (
    <iframe
      className="frame"
      style={{ borderRadius: '5px', flex: 3, width: '100%' }}
      height="295"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15449.097360368622!2d121.04093402526051!3d14.526294058613376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8c8c683603d%3A0xe71e5f3cd00d6813!2sPinagsama%2C%20Taguig%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1646354666141!5m2!1sen!2sph"
      allowFullScreen
      data-aos="fade-up"
      loading="lazy"
    ></iframe>
  );
}
