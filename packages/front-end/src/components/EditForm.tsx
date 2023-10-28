import clsx from 'clsx';

export default function EditForm ({user, onClose})  {

    console.log(user);

    return (
        <>
            <div>
                <button
                    className="text-green-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    Submit
                </button>
                <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={onClose}
                  >
                    Close
                  </button>
            </div>
        </>
    )
}
