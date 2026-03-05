const LoadingSpinner = () => {
  return (

      <div className="flex gap-5 justify-center items-center ">
        <div className="animate-spin rounded-full h-14 w-14 border-b-2 border-blue-600"></div>
        {/* <p className="text-sm font-medium text-slate-500">Analyzing symptoms...</p> */}
      </div>

  );
};

export default LoadingSpinner;
  
