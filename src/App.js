import React, { useState } from "react";
import { Card, Form, Button, Row, Col, Container } from "react-bootstrap";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [expense, setExpense] = useState({});
  const [expenses, setExpenses] = useState([
    { name: "Groceries", cost: "2000000" },
    { name: "Visa", cost: "23000000" },
    { name: "Gas", cost: "70000" }
  ]);
  const onSubmit = e => {
    e.preventDefault();
    setExpenses(expenses.concat(expense));
    setExpense({ name: "", cost: "" });
  };

  const onChange = e => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Navbar />
      <Row className="mb-5">
        <Col>
          <Container>
            <Form onSubmit={onSubmit} onChange={onChange}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  placeholder="Enter expense..."
                  value={expense.name}
                />
                <Form.Text className="text-muted">
                  Groceries, Gas, etc.
                </Form.Text>

                <Form.Label>Cost</Form.Label>
                <Form.Control
                  name="cost"
                  placeholder="Enter cost..."
                  value={expense.cost}
                />
                <Form.Text className="text-muted">$10.00</Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Col>
      </Row>

      <Row>
        {expenses.map(expense => {
          return (
            <Col md={4}>
              <Container>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>{expense.name}</Card.Title>
                    <Card.Text>{expense.cost}</Card.Text>
                    <Button variant="primary">View</Button>
                  </Card.Body>
                </Card>
              </Container>
            </Col>
          );
        })}
      </Row>
      <Footer />
    </div>
  );
}

export default App;
