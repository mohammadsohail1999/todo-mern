import React, { useEffect, useState } from "react";
import { postTitle } from "../actions/TitleActions";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";

const AddTitleScreen = () => {
  const [title, setTitle] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const { Title } = useSelector((state) => state.CreatedTitle);

  useEffect(() => {
    if (Title) {
      history.push(`/${Title._id}`);
      dispatch({type:'LIST_POST_CLEAR'})
    }
  }, [history,Title,dispatch]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(postTitle(title));
  };

  const changeHandler = (obj) => {
    setTitle({ ...title, ...obj });
  };

  return (
    <div className="ui container" style={{ height: "60vh", marginTop: "5%" }}>
      <div
        className="ui segment"
        style={{ width: "80%", padding: "5%", margin: "0 auto" }}
      >
        <h1>Enter the Title</h1>
        <form onSubmit={onSubmitHandler} className="ui form">
          <div className="field">
            <label>Title</label>
            <input
              onChange={(e) => {
                changeHandler({ Title: e.target.value });
              }}
              required
              type="text"
              name="first-name"
              placeholder="First Name"
            />
          </div>

          <button className="ui green button">Add Title</button>
        </form>
      </div>
    </div>
  );
};

export default AddTitleScreen;
