import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis
} from "@fortawesome/free-solid-svg-icons";


const UserCard = ({ type }: { type: string }) => {
   return (
    <div className="rounded-2xl odd:bg-colorMintGreen even:bg-colorBlue p-4 flex-1 min-w-[130px]">
        <div className="flex justify-between items-center">
        <span className="text-slate-600[10px] bg-white px-2 py-1 rounded-full text-colorMintGreen">
          2024/25
        </span>
        <FontAwesomeIcon
        icon={faEllipsis}
        style={{ color: 'white', width: '20px', height: '20px' }}
        />

      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-slate-600">{type}s</h2>
     </div>
   );
};

export default UserCard;