const Comments = ({ data }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <h4 className="text-primary uppercase tracking-widest">
            Testimonial
          </h4>
          <h1 className="text-4xl font-bold">Product Comments</h1>
        </div>

        <div className="mt-10 flex flex-col items-center space-y-10">
          {data.length !== 0 ? (
            <>
              {data.map((comment) => (
                <div>
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-20 h-20 rounded-full"
                      src={comment.profile}
                      alt=""
                    />
                    <div>
                      <h4 className="font-bold">{comment.username}</h4>
                      <p className="text-gray-500">User</p>
                    </div>
                  </div>
                  <p className="mt-2 text-center text-gray-600">
                    {comment.body}
                  </p>
                </div>
              ))}
            </>
          ) : (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 w-96 flex flex-col gap-4 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Nothing Found!</strong>
              <span className="block sm:inline capitalize">
                There is no comment for this product.
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Comments;
