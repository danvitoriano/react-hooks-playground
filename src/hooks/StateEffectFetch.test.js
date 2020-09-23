import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import StateEffectFetch from "./StateEffectFetch";

let container = null;
beforeEach(() => {
    // configurar o elemento do DOM como o alvo da renderização
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // limpar na saída
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders user data", async () => {
    const fakeUser = {
        data: {
            first_name: "Joni ",
            last_name: "Baez",
            email: "jonibaez@reqres.in",
            avatar: "image.jpg"
        }
    }
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeUser)
        })
    );

    // Usar a versão assíncrona de act para aplicar Promises resolvidas
    await act(async () => {
        render(<StateEffectFetch id="123" />, container);
    });

    expect(container.querySelector("summary").textContent).toBe(`${fakeUser.data.first_name} ${fakeUser.data.last_name}`);
    expect(container.querySelector("strong").textContent).toBe(fakeUser.data.email);
    expect(container.querySelector("img").src).toBe(`http://localhost/${fakeUser.data.avatar}`);
    expect(container.textContent).toContain(fakeUser.data.first_name);

    // remover o mock para garantir que os testes estão completamente isolados
    global.fetch.mockRestore();
});