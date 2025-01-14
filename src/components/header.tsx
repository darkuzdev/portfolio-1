import Image from 'next/image';
import { GitHub, Twitter, Linkedin } from 'react-feather';

// interfaces
import { Me } from 'interfaces/me.interface';

// components
import { Button } from './button';

export const Header = ({
  me: { name, username, biography, github, twitter, linkedin, picture, cover }
}: HeaderProps) => {
  return (
    <header>
      <div className="relative w-full h-96 overflow-hidden">
        <Image
          src={cover.url}
          placeholder="blur"
          blurDataURL={cover.url}
          layout="fill"
          objectFit="cover"
          alt="Cover picture"
        />
      </div>
      <div className="container">
        <div className="flex justify-between w-full">
          <div className="w-1/2">
            <div className="relative -mt-24 w-48 h-48 bg-cover bg-center border-2 border-white rounded-full overflow-hidden">
              <Image
                src={picture.url}
                className="transition-all duration-300 ease-in"
                placeholder="blur"
                blurDataURL={picture.url}
                layout="fill"
                objectFit="cover"
                alt={name}
              />
            </div>
          </div>
          <div className="flex justify-end w-1/2">
            <div className="mt-4">
              <Button>Resume</Button>
            </div>
          </div>
        </div>
        <section className="mt-6">
          <h1 className="text-white font-display text-4xl">
            {name}
            <span className="block text-cadet-grey font-body text-base font-light">
              @{username}
            </span>
          </h1>
          <div className="mt-4 w-4/5">
            <p className="text-white font-body font-light">{biography}</p>
            <ul className="flex mt-4 space-x-4">
              <li className="flex p-2 hover:bg-raisin-black rounded-full cursor-pointer">
                <a href={github} target="_blank" rel="noreferrer">
                  <GitHub className="w-6 h-6 text-white" />
                </a>
              </li>
              <li className="flex p-2 hover:bg-raisin-black rounded-full cursor-pointer">
                <a href={twitter} target="_blank" rel="noreferrer">
                  <Twitter className="w-6 h-6 text-white" />
                </a>
              </li>
              <li className="flex p-2 hover:bg-raisin-black rounded-full cursor-pointer">
                <a href={linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </header>
  );
};

type HeaderProps = {
  me: Me;
};
