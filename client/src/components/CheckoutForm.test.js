import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    expect(screen.getByText(/Checkout Form/i))
    
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)

    const firstNameInput = screen.getByLabelText(/First Name:/i);
    const lastNameInput = screen.getByLabelText(/Last Name:/i);
    const addressInput = screen.getByLabelText(/Address:/i);
    const cityInput = screen.getByLabelText(/City:/i);
    const stateInput = screen.getByLabelText(/State:/i);
    const zipInput = screen.getByLabelText(/Zip:/i);
    const buttonSubmit = screen.getByTestId(/submit/i)

    fireEvent.change(firstNameInput, {target : {value: 'robert'}})
    fireEvent.change(lastNameInput, {target : {value: 'masters'}})
    fireEvent.change(addressInput, {target : {value: '180 tony hawk ave'}})
    fireEvent.change(cityInput, {target : {value: 'kickflip city'}})
    fireEvent.change(stateInput, {target : {value: 'Skatetopia'}})
    fireEvent.change(zipInput, {target : {value: '360'}})
    fireEvent.click(buttonSubmit)

    const fName = await screen.findByText(/First Name:/i);
    const lName = await screen.findByText(/Last Name:/i);
    const ad = await screen.findByText(/Address:/i);
    const cit = await screen.findByText(/City:/i);
    const st = await screen.findByText(/State:/i);
    const z = await screen.findByText(/Zip:/i);

    expect(fName).toBeInTheDocument()
    expect(lName).toBeInTheDocument()
    expect(ad).toBeInTheDocument()
    expect(cit).toBeInTheDocument()
    expect(st).toBeInTheDocument()
    expect(z).toBeInTheDocument()


});
