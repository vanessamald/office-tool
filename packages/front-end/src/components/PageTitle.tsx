import Link from 'next/link';

const PageTitle = ({ title }) => {
  return (
    <h1 className='font-semibold px-4 py-10 text-4xl font-medium text-center text-white bg-blueish'>
      <Link href={'/'}>
        {title}
      </Link>
    </h1>
  );
};

export default PageTitle;