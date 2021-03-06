import React from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Message from "./Message";
import { Button, ButtonToolbar } from "react-bootstrap";
import "./ArticleList.css";
import {crypt} from "../rsa";

const ArticleList = props => {
  const { articles, deleteHandler } = props;

  if (null === articles || 0 === articles.length) {
    return <Message message="Aucun article enregistré" />;
  }

  let privateKey = window.localStorage.getItem("prvKey");
  
  return (
    <div className="col mb-2">
      <TransitionGroup>
        {articles.map(article => {
          let title = crypt.decrypt(privateKey, article.title);
          return (
            <CSSTransition key={article.id} timeout={1000} classNames="fade">
              <div className="card ">
                <div className="card-body myCloud-card-body">
                  <h3>
                    <Link to={`/article/${article.id}`}>{title.message}</Link>
                  </h3>
                  <ButtonToolbar>
                    <Button
                      variant="outline-info"
                      href={`/article/update/${article.id}`}
                    >
                      Update
                    </Button>
                    <Button
                      variant="outline-danger"
                      onClick={function onArticleDeleteClick(event) {
                        event.preventDefault();
                        deleteHandler(article.id);
                      }}
                    >
                      Remove
                    </Button>
                  </ButtonToolbar>
                </div>
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default ArticleList;
