import React, { useState } from "react";
import { useActions } from "../hook/useActions";
import { useTypedSeletor } from "../hook/useTypedSeletor";

const RepositoriesList = () => {
    const [term, setTerm] = useState("");
    const { searchRepositories } = useActions();
    const { loading, data, error } = useTypedSeletor(
        (state) => state.repositories
    );
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(term);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={term} onChange={(e) => setTerm(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            {error && <h3> {error}</h3>}
            {loading && <h3> Loading...</h3>}
            {!error &&
                !loading &&
                data.map((e, i) => {
                    return <div key={i}>{e}</div>;
                })}
        </div>
    );
};

export default RepositoriesList;
