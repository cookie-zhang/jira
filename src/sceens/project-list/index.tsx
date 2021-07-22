import React from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useEffect, useState } from "react";
import { clearnObject } from "../../util/index";
import { useMount, useDebounce } from "../../util/hooks";
import { useHttp } from "util/http";
export const ProjectList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const useDebounceParam = useDebounce(param, 200);
  const client = useHttp();
  useEffect(() => {
    client("projects", { data: clearnObject(useDebounceParam) }).then(setList);
  }, [useDebounceParam]);
  useMount(() => {
    client("users").then(setUsers);
  });
  return (
    <div>
      <SearchPanel
        users={users}
        param={param}
        setParam={setParam}
      ></SearchPanel>
      <List users={users} list={list}></List>
    </div>
  );
};
