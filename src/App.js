import useStore from "./hooks/useStore";

function App() {

    const {users} = useStore()
    console.log(users)
    return (
        <div>
            start
        </div>
    );
}

export default App;