import { AiFillTikTok, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 border-t border-gray">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <p className="text-sm text-center md:text-left">
          &copy; 2024 CaririTips, Inc. All rights reserved
        </p>
        <div className="flex flex-wrap justify-center md:justify-end space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.instagram.com/cariritips/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600"
          >
            <AiFillInstagram color="#17B121" size={24} />
          </a>
          <a
            href="https://www.youtube.com/@CaririTips "
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600"
          >
            <AiFillYoutube color="#17B121" size={24} />
          </a>
          <a
            href="https://www.tiktok.com/@cariritips"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600"
          >
            <AiFillTikTok size={24} color="#17B121" />
          </a>
        </div>
      </div>
    </footer>
  )
}
