const Footer = () => {
  return (
    <div className="bg-teal-700 text-xl text-white" id="footer">
      <section className="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between ">
        <address>
          <h2>Lorem ipsum dolor sit. Inc.</h2>
          555 Astro Way <br />
          Fairfield, New Jersey 12345-88888 <br />
          Emai: <a href="mailto:hghghg@gmail.com">hghghg@gmail.com</a>
          <br />
          Phone: <a href="tel:+15555555555">(555) 555-55555 </a>
        </address>
        <nav className="hidden flex-col gap-2 md:flex" aria-label="footer">
          <a href="#rockets" className="hover:opacity-90">
            Our Rockets
          </a>
          <a href="#testimonials" className="hover:opacity-90">
            Testimonials
          </a>
          <a href="#contacts" className="hover:opacity-90">
            Contacts
          </a>
        </nav>
        <div className="flex flex-col sm:gap-2">
          <p className="text-right">
            Copyright &copy; <span id="year">2022</span>
          </p>
          <p className="text-right">All Rights Reserved</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
