import React, {FC, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import '../../assets/styles/partials/_Authors.scss';
import AuthorListItem from "./AuthorListItem";
import {IAuthor} from "../../interfaces/IAuthor";
import {Plus} from "react-feather";
import CreateAuthorForm from "./CreateAuthorForm";

const Authors: FC = () => {
    // Author list
    const [authorList, setAuthorList] = useState<IAuthor[]>([
        {name: "Author1", id: 1},
        {name: "Author2", id: 2},
        {name: "Author3", id: 3}
    ]);

    return (
        <Container className="px-md-4 px-sm-5 px-xs-5">
            <Row>
                <Col xs={12} className="text-xs-left authors-title px-0 pb-1">
                    Authors
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="px-0 pt-4">
                    {authorList.map(
                        (Author: IAuthor) => {
                            return (
                                <AuthorListItem name={Author.name} id={Author.id} key={Author.id}/>
                            );
                        }
                    )}
                </Col>
            </Row>
            <Row className="mt-3 mb-4">
                <Col xs={12} className="px-0">
                    <Plus className="plus-icon mb-1 ml-0" /> <span className="px-0 add-author-text">Add Author</span>
                </Col>
            </Row>
            <Row>
                <CreateAuthorForm />
                <Col className="mt-3" />
            </Row>
        </Container>
    );
}

export default Authors;