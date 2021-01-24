import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { TitlebyId } from "../actions/TitleActions";
import {
  getAllTodos,
  CreateTodo,
  DeleteTodo,
  UpdateTodo,
} from "../actions/TodoActions";

const AddToDosScreen = () => {
  const params = useParams();

  const [task, setTask] = useState(null);
  const [totId, setTodoId] = useState(null);

  const defaultValue = useRef(null);

  const [updating, setUpdating] = useState(false);

  const dispatch = useDispatch();

  const { Title } = useSelector((state) => state.TitlebyId);
  const Todos = useSelector((state) => state.Todos);

  const onSubmithandler = (e) => {
    e.preventDefault();

    if (updating) {
      dispatch(UpdateTodo(task, totId));

      setUpdating(false);
    } else {
      dispatch(CreateTodo(task));
    }

    setTask(null);
  };

  useEffect(() => {
    dispatch(TitlebyId(params.id));
    dispatch(getAllTodos(params.id));
  }, [dispatch, params.id]);

  return (
    <>
      {Title && (
        <div className="ui container">
          <div className="ui segment">
           <Link to="/"><button className="ui green button">Go back!</button></Link> 
            <div
              style={{ padding: "0 10% 10% 10%", marginTop: "3%" }}
              className="ui grid"
            >
              <div className="ten wide column">
                <div className="ui segment">
                  <h1 style={{ textAlign: "center" }}>Title: {Title.Title} </h1>
                </div>
                <div>
                  <h1>Tasks: </h1>
                  <div className="ui middle aligned divided list">
                    {Todos.length > 0 ? (
                      Todos.map((todo) => {
                        return (
                          <div
                            style={{ padding: "2%" }}
                            key={todo._id}
                            class="item"
                          >
                            <div className="right floated content">
                              <button
                                onClick={() => {
                                  dispatch(DeleteTodo(todo._id));
                                }}
                                style={{
                                  background: "none",
                                  outline: "none",
                                  border: "none",
                                }}
                              >
                                <i
                                  style={{ color: "red" }}
                                  className="fas fa-trash"
                                ></i>
                              </button>

                              <button
                                style={{
                                  background: "none",
                                  outline: "none",
                                  border: "none",
                                }}
                                onClick={() => {
                                  setUpdating(true);

                                  setTask({ Description: todo.Description });
                                  setTodoId(todo._id);
                                }}
                                className="ui button"
                              >
                                <i className="fas fa-pen"></i>{" "}
                              </button>

                              {todo.completed ? (
                                <button
                                  className="ui button"
                                  onClick={() => {
                                    dispatch(
                                      UpdateTodo({ completed: false }, todo._id)
                                    );
                                  }}
                                  style={{
                                    background: "none",
                                    outline: "none",
                                    border: "none",
                                  }}
                                >
                                  <i
                                    style={{ color: "red" }}
                                    className="fas fa-times"
                                  ></i>
                                </button>
                              ) : (
                                <button
                                  className="ui button"
                                  onClick={() => {
                                    dispatch(
                                      UpdateTodo({ completed: true }, todo._id)
                                    );
                                  }}
                                  style={{
                                    background: "none",
                                    outline: "none",
                                    border: "none",
                                  }}
                                >
                                  <i
                                    style={{ color: "green" }}
                                    className="fas fa-check"
                                  ></i>
                                </button>
                              )}
                            </div>

                            <div style={{ fontSize: "1.7rem" }} class="content">
                              <span style={{ padding: "1%" }}>
                                {todo.completed === false ? (
                                  <i
                                    style={{ color: "red" }}
                                    className="fas fa-times"
                                  ></i>
                                ) : (
                                  <i
                                    style={{ color: "green" }}
                                    className="fas fa-check"
                                  ></i>
                                )}
                              </span>{" "}
                              {todo.Description}
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <p>no Tasks to Do!</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="six wide column">
                <div className="ui segment">
                  <h2>Add tasks:</h2>

                  <form onSubmit={onSubmithandler} className="ui form">
                    <div className="field">
                      <label>Add Todo:</label>

                      <input
                        value={task ? task.Description : ""}
                        ref={defaultValue}
                        onChange={(e) => {
                          setTask({
                            id: params.id,
                            Description: e.target.value,
                          });
                        }}
                        type="text"
                        name="first-name"
                        placeholder="First Name"
                      />
                    </div>

                    {updating ? (
                      <button className="ui basic violet button" type="submit">
                        Update Tasks
                      </button>
                    ) : (
                      <button className="ui basic green button" type="submit">
                        Add Tasks
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddToDosScreen;
