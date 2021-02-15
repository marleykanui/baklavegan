// React
import { Fragment } from 'react';

//Next
import Link from 'next/link';
import Image from 'next/image';

// React Types
import { FC } from 'react';

// Component Level Types
import { ContactInfoCardProps } from '../0-types/ContactProps';

const ContactInfo: FC<ContactInfoCardProps> = ({
  name,
  image,
  link = null,
  textOne,
  textTwo,
  textThree = null,
}) => {
  return (
    <Fragment>
      <div className={`${name}bgpos ${name}to`}>
        <Image src={image} alt={name} width={624} height={125} />
      </div>
      <div className={`${name}textpos ${name}to relative cardopacity`}>
        <div
          className={`${name}textstyle textstyle flex flex-col justify-center items-center`}
        >
          <p>{textOne}</p>
          <p>
            {textTwo && textTwo}{' '}
            {link && (
              <Link href="/baklavegan/faq">
                <a>
                  <u>{link}</u>
                </a>
              </Link>
            )}{' '}
            {textThree && textThree}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactInfo;
