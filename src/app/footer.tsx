import Image from 'next/image';
import style from './footer.module.scss';

const Footer = () => {
  const currentDate = new Date();

  return (
    <footer className="footer">
      <span>
        <Image
          style={{ filter: 'invert(1' }}
          src="/vercel.svg"
          alt="Vercel Logo"
          width={72}
          height={16}
        >
        </Image>
      </span>
      <small className="d-block mt-2 text-uppercase">
        copyright &copy; {currentDate.getFullYear()} u3791411
      </small>
    </footer>
  );
}

export default Footer;