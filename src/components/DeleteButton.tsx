import { Fragment } from "react/jsx-runtime";



const DeleteButton = ({id, setTodos}: {id: number, setTodos: React.Dispatch<React.SetStateAction<{
    text: string;
    isCompleted: boolean;
    id: number;
}[]>>}) => {
  return (
    <Fragment>
        <button type="button" className="text-red-500"
                    onClick={
                      () => {
                        setTodos((prev) => prev.filter((item) => item.id !== id))
                      }}
                  >Delete</button>
        {/* <button type="button">❌</button> */}
    </Fragment>
  )
}

export default DeleteButton