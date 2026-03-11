function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light border-top border-secondary-subtle mt-4">
      <div className="container py-3 text-center small">
        © {year} Mon Restaurant. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;
