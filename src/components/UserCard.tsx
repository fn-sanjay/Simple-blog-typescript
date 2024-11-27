import { FaUserCircle } from 'react-icons/fa';

interface Person {
  name: string;
  following: boolean;
}

interface UserCardProps {
  person: Person;
}

const UserCard: React.FC<UserCardProps> = ({ person }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <FaUserCircle className="text-3xl mr-3 text-gray-500" />
        <h2 className="text-lg font-bold">{person.name}</h2>
      </div>
      <button
        className={`px-4 py-1 text-sm rounded-full ${
          person.following ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
        }`}
      >
        {person.following ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};

export default UserCard;
