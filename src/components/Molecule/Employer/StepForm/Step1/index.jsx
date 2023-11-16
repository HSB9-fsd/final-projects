import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Label, Par, Card, Hed2, Button } from "../index";
import { Radio, Input, Select } from "antd";

function Step1() {
  const [value, setValue] = useState("");
  return (
    <form action="" className="w-full md:w-[70%] overflow-hidden">
      <Hed2 variant="headTitle" className="mb-3">
        Fill in the job ad details
      </Hed2>
      <Card>
        <Hed2 variant="bodyTitle" className="mb-3">
          Job type
        </Hed2>
        <div>
          <Label>Whats the job title</Label>
          <Input type="text" placeholder="Enter a job title" className="my-2" />
        </div>
        <div>
          <Label>Whats type od role it?</Label>
          <Radio.Group className="flex flex-col gap-2">
            <Radio value="one"> Full-Time </Radio>
            <Radio value="two"> Part-Time </Radio>
            <Radio value="three"> Contract </Radio>
            <Radio value="four"> Temporary </Radio>
            <Radio value="five"> Intership </Radio>
          </Radio.Group>
        </div>
        <div>
          <Label>Whats the position level?</Label>
          <Select className="w-full" placeholder="Select a position level">
            <Select.Option value="choose">point A</Select.Option>
          </Select>
        </div>
        <div>
          <Label>What are the required years of experience </Label>
          <Select className="w-full" placeholder="Min">
            <Select.Option value="demo">Min</Select.Option>
          </Select>
        </div>
        <div>
          <Label>Whats the job specialisation</Label>
          <Par>Select the most relevent undustry for this job</Par>
          <Select className="w-full" placeholder="Job Specialisation">
            <Select.Option value="demo">Job Specialisation</Select.Option>
          </Select>
        </div>
      </Card>
      <Card className="my-3">
        <Hed2 variant="bodyTitle" className="mb-3">
          Work Location
        </Hed2>
        <div>
          <Label>Where Is your new employee gooing to work?</Label>
          <Select className="w-full" placeholder="Indonesia">
            <Select.Option value="demo">Min</Select.Option>
          </Select>
          <Select className="w-full mt-2" placeholder="Select State">
            <Select.Option value="demo">Min</Select.Option>
          </Select>
        </div>
      </Card>
      <Card>
        <Hed2 variant="bodyTitle">Position site</Hed2>
        <div>
          <Label>Where do you wan to post this job</Label>
          <Radio.Group className="flex flex-col gap-2">
            <Radio value="one"> Indonesia </Radio>
            <Radio value="two"> Malaysia </Radio>
            <Radio value="three"> Singapore </Radio>
          </Radio.Group>
        </div>
      </Card>
      <Card className="my-3">
        <Hed2 variant="bodyTitle">Budget</Hed2>
        <Par>
          Candidates are more likely to apply jobs that offer salary information
        </Par>
        <Label>Whats the mountly salary range</Label>
        <div className="flex items-center gap-3">
          <Select className="w-28" defaultValue="demo">
            <Select.Option value="demo" selected>
              IDR
            </Select.Option>
            <Select.Option value="demo1">Dollar</Select.Option>
          </Select>
          <Input type="number" placeholder="Min" className="w-28" />
          to
          <Input type="number" placeholder="Max" className="w-28" />
        </div>
        <Radio.Group className="mt-3">
          <Radio value="budget">Display salary detauls in the ad.</Radio>
        </Radio.Group>
      </Card>
      <Card>
        <Hed2 variant="bodyTitle">Job description</Hed2>
        <Par>
          A great job ad talks about clear responsibilities, requitemens and
          reward. Learn how to write about these{" "}
          <a href="#" className="text-blue-500">
            here
          </a>{" "}
          or refer to some{" "}
          <a href="#" className="text-blue-500">
            samples
          </a>
        </Par>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          className="h-64 mb-28 sm:mb-14"
        />
        <a href="#" className="text-blue-500 font-semibold ">
          Discriminatory policies & practices
        </a>
      </Card>
      <Card className="my-3">
        <Hed2 variant="bodyTitle">Company information</Hed2>
        <div>
          <Label>Whats the Industry of your business belongs to?</Label>
          <Select className="w-full" defaultValue="demo">
            <Select.Option value="demo" selected>
              ....
            </Select.Option>
          </Select>
        </div>
        <div>
          <Label>Your company overview</Label>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="h-64 mb-14"
          />
        </div>
      </Card>
      <Hed2 variant="headTitle" className="mb-3">
        Select the job ad type
      </Hed2>
      <Card>
        <Hed2 variant="bodyTitle">Ad type selection</Hed2>
        <Par>
          Select the ad type that best suits the role you{"'"}re looking to
          fill. All ads are listed across desktop, mobile and tablet and
          recommended to relevent candidates.
        </Par>

        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="border-2 px-2 py-7 w-full">
            <h3 className="mb-3">Basic Ad</h3>
            <del> IDR 851,000.00</del>
            <p>IDR</p>
            <h2 className="my-2">416,990.00</h2>
            <div className="px-1 my-2 bg-blue-400/40 w-16 rounded-full text-blue-800">
              51%off
            </div>
            <p>Fill simple hiring needs</p>
            <Button variant="outline" className="w-full py-2">
              Select
            </Button>
            <strong>30-days listing</strong>
          </div>

          <div className="border-2 px-2 py-7  w-full">
            <h3 className="mb-3">Basic Ad</h3>
            <del> IDR 1,064,000.00</del>
            <p>IDR</p>
            <h2 className="my-2">521,360.00</h2>
            <div className="px-1 my-2 bg-blue-400/40 w-16 rounded-full text-blue-800">
              51%off
            </div>
            <p>Promote your employer brand</p>
            <Button variant="outline" className="w-full py-2">
              Select
            </Button>
            <p>30-days listing</p>
            <strong className="block mt-3">
              Stand out with larger ad space
            </strong>
            <strong className="block my-3">
              Add company images to promote your brand
            </strong>
            <strong className="block">
              Higlight 3 key selling points to attract candidates
            </strong>
          </div>

          <div className="border-2 px-2 py-7  w-full">
            <h3 className="mb-3">Basic Ad</h3>
            <p>IDR</p>
            <h2 className="my-2">1,316,900.00</h2>
            <div className="px-1 my-2 bg-blue-400/40 w-16 rounded-full text-blue-800">
              51%off
            </div>
            <p>Attract more candidates for competitive roles</p>
            <Button variant="outline" className="w-full py-2">
              Select
            </Button>
            <p>30-days listing</p>
            <p className="block mt-3">Stand out with larger ad space</p>
            <p className="block my-3">
              Add company images to promote your brand
            </p>
            <p className="block mb-3">
              Higlight 3 key selling points to attract candidates
            </p>
            <strong>Priority listing in search </strong>
            <strong>Secure candidates faster </strong>
          </div>
        </div>
      </Card>
    </form>
  );
}

export default Step1;
