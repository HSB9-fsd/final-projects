import { Container } from "../../../Atom/";
import { Button } from "../../../Molecule/Employer/StepForm/";
import { useState } from "react";
import { message, Steps } from "antd";
import { Step1, Step2, Step3 } from "../../../Molecule/Employer/StepForm";

const steps = [
  {
    title: "First",
    content: <Step1 />,
  },
  {
    title: "Second",
    content: <Step2 />,
  },
  {
    title: "Last",
    content: <Step3 />,
  },
];

function CreadeAds() {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <>
      <section className="w-screen h-full bg-slate-50">
        <Container className="pt-20">
          <Steps
            current={current}
            items={items}
            className="w-full md:w-[70%] pb-32"
          />
          <div>{steps[current].content}</div>
          <div
            style={{
              marginTop: 24,
            }}
          >
            {current < steps.length - 1 && (
              <Button
                variant="primary"
                type=""
                onClick={() => next()}
                className="py-2 px-10"
              >
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                variant="primary"
                onClick={() => message.success("Processing complete!")}
                className="py-1 px-10 ml-3"
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button
                variant="outline"
                onClick={() => prev()}
                className="py-1 px-10 ml-3"
              >
                Previous
              </Button>
            )}
          </div>
        </Container>
      </section>
      <div className="my-10"></div>
    </>
  );
}

export default CreadeAds;
