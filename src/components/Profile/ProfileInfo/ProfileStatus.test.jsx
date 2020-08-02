import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-render";
import React from "react";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const instance = component.getInstance();
        expect(instance.status.status).toBe("it-kamasutra.com")
    })
})

test("status from props should be in the state", () => {
    const component = create (<ProfileStatus status="it-kamasutra.com" />);
    const instance = component.getInstance();
    expect(instance.status.status).toBe("it-kamasutra.com")
})