import BottomButton from "../components/BottomButton";
import Navbar from "../components/Navbar";

const silver_facility_page = () => {
  return (
    <div className="silver_facility_page">
      <Navbar />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8223924372!2d90.27923775747219!3d23.780887456211758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1650575249852!5m2!1sen!2sbd"
        style={{ border: 0, width: "100%", height: "100vh" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <BottomButton status={'menu'} />
    </div>
  );
};

export default silver_facility_page;
