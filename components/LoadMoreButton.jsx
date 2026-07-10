// components/LoadMoreButton.jsx
export default function LoadMoreButton({ onClick }) {
  return (
    <div className="flex justify-center mt-6 mb-10">
      <button
        onClick={onClick}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-full transition-colors"
      >
        Load more
      </button>
    </div>
  );
}