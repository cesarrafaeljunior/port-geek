import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PortFormModalStyled from "./styles";
import { CgClose } from "react-icons/cg";
import {
  iPortDataOrganized,
  PortifolioContext,
} from "../../../contexts/PortifolioContext";
import { useContext } from "react";
import { DashboardContext } from "../../../contexts/DashboardContext";
import * as yup from "yup";
import layout1 from "../../../assets/img/Layout-1.png";
import layout2 from "../../../assets/img/Layout-2.png";
import layout3 from "../../../assets/img/Layout-3.png";

interface iPortFormModal {
  name: string;
  age: number;
  birthDate: string;
  aboutYou: string;
  city: string;
  country: string;
  email: string;
  experience: string;
  gender: string;
  github_url: string;
  linkedin_url: string;
  projectDeploy_url: string;
  projectImage_url: string;
  projectRepository_url: string;
  project_description: string;
  project_title: string;
  skills: string;
  street: string;
  telephone: string;
  training: string;
  zipCode: string;
  selected_layout: string;
}

const schemaMaxDate = () => {
  const date = new Date();
  const dateArray = date.toLocaleDateString().split("/");
  return `${dateArray[0]}/${dateArray[1]}/${+dateArray[2] - 18}`;
};
const schema = yup.object({
  name: yup.string().required("Name is required"),
  age: yup.number(),
  birthDate: yup
    .date()
    .max(schemaMaxDate(), "Must be over 18 years old")
    .required("Birth date is required")
    .typeError("Birth date is required")
    .nullable(),
  aboutYou: yup.string().required("Description about you is required"),
  city: yup
    .string()
    .required("City is required")
    .matches(/[-]{1}[A-Z]{2}/g, "The format is City-STATE"),
  country: yup.string().required("Country is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  experience: yup.string().required("Experience is required"),
  gender: yup.string().required("Gender is required"),
  github_url: yup
    .string()
    .url("Enter a valid GitHub profile URL")
    .required("GitHub profile URL is required"),
  linkedin_url: yup
    .string()
    .url("Enter a valid Linkedin profile URL")
    .required("Linkedin URL is required"),
  projectDeploy_url: yup
    .string()
    .url("Enter a valid project deploy URL")
    .required("Project deploy URL is required"),
  projectImage_url: yup
    .string()
    .url("Enter a valid project image URL")
    .required("Project image URL is required"),
  projectRepository_url: yup
    .string()
    .url("Enter a valid project repository URL")
    .required("Project repository URL is required"),
  project_description: yup.string().required("Project description is required"),
  project_title: yup.string().required("Project title is required"),
  skills: yup.string().required("Skills is required"),
  street: yup
    .string()
    .required("Street is required")
    .matches(/[\d]+/g, "Must contain the address number")
    .matches(
      /([\d](,)[a-zA-Z]|[\d][\s]+[a-zA-Z])+|([\d](,)[\s]+[a-zA-Z]|[\d][\s]+[a-zA-Z])+|([\d][\s]+(,)[\s]+[a-zA-Z]|[\d][\s]+[a-zA-Z])/g,
      "Must contain the address district"
    ),
  telephone: yup
    .string()
    .required("Telephone contact is required")
    .matches(/([\d]{2})[\s][9][\d]{8}/g, "The format should be: DDD 9XXXXXXXX"),
  training: yup.string().required("Training is required"),
  zipCode: yup.string().required("ZipCode is required"),
  selected_layout: yup.string(),
});

const PortFormModal = () => {
  const { portCreateAuth, setPortCreateAuth, portfolioInfo } =
    useContext(DashboardContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iPortFormModal>({
    resolver: yupResolver(schema),
    defaultValues: { name: "teste" },
  });
  console.log(portfolioInfo);
  const { sendPortifolio } = useContext(PortifolioContext);

  function dataOrganize(data: iPortFormModal): iPortDataOrganized {
    let data2 = { ...data, adress: {}, user_profile: {}, project: {} } as any;
    for (let key in data) {
      switch (key) {
        case "city":
          data2.adress.city = data[key];
          delete data2.city;
          break;
        case "country":
          data2.adress.country = data[key];
          delete data2.country;
          break;
        case "street":
          data2.adress.street = data[key];
          delete data2.street;
          break;
        case "zipCode":
          data2.adress.zipCode = data[key];
          delete data2.zipCode;
          break;
        case "name":
          data2.user_profile.name = data[key];
          delete data2.name;
          break;
        case "age":
          data2.user_profile.age = data[key];
          delete data2.age;
          break;
        case "birthDate":
          data2.user_profile.birthDate = data[key];
          data2.user_profile.birthDate =
            data2.user_profile.birthDate.toLocaleDateString();
          delete data2.birthDate;
          break;
        case "email":
          data2.user_profile.email = data[key];
          delete data2.email;
          break;
        case "aboutYou":
          data2.user_profile.aboutYou = data[key];
          delete data2.aboutYou;
          break;
        case "experience":
          data2.user_profile.experience = data[key];
          delete data2.experience;
          break;
        case "gender":
          data2.user_profile.gender = data[key];
          delete data2.gender;
          break;
        case "training":
          data2.user_profile.training = data[key];
          delete data2.training;
          break;
        case "skills":
          data2.user_profile.skills = data[key];
          delete data2.skills;
          break;
        case "telephone":
          data2.user_profile.telephone = data[key];
          delete data2.telephone;
          break;
        case "github_url":
          data2.user_profile.github_url = data[key];
          delete data2.github_url;
          break;
        case "linkedin_url":
          data2.user_profile.linkedin_url = data[key];
          delete data2.linkedin_url;
          break;
        case "projectDeploy_url":
          data2.project.projectDeploy_url = data[key];
          delete data2.projectDeploy_url;
          break;
        case "projectRepository_url":
          data2.project.projectRepository_url = data[key];
          delete data2.projectRepository_url;
          break;
        case "projectImage_url":
          data2.project.projectImage_url = data[key];
          delete data2.projectImage_url;
          break;
        case "project_description":
          data2.project.project_description = data[key];
          delete data2.project_description;
          break;
        case "project_title":
          data2.project.project_title = data[key];
          delete data2.project_title;
          break;
        case "selected_layout":
          data2.project.selected_layout = data[key];
          delete data2.selected_layout;
          break;
      }
    }
    return data2;
  }

  function setAgeValue(event: any) {
    const inputAge = document.getElementById("age") as HTMLInputElement;
    const birthArray = event.target.value.split("-");
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
    const currentDay = date.getDate();
    let AgePreview = currentYear - +birthArray[0];

    if (
      currentMonth < +birthArray[1] ||
      (currentMonth == +birthArray[1] && currentDay < +birthArray[2])
    ) {
      AgePreview--;
    }
    inputAge.value = String(AgePreview);
    inputAge.classList.remove("invalid");
  }

  function telOrganize(event: any) {
    event.target.maxLength = 12;
    event.target.value = event.target.value.replace(/[^\s\d]+/g, "");

    if (event.target.value.length == 3 && !event.target.value.includes(" ")) {
      event.target.value = `${event.target.value[0]}${event.target.value[1]} ${event.target.value[2]}`;
    }
  }

  function inputValidation() {
    // VALIDAÇÂO PARA ALTERAÇÂO DO CSS
    const inputs = document.querySelectorAll("input");
    const textareas = document.querySelectorAll("textarea");
    const selects = document.querySelectorAll("select");
    const allInputs = [...inputs, ...textareas, ...selects];

    allInputs.forEach((input) => {
      // VALIDAÇÂO GERAL
      if (input.value.trim() == "") {
        input.classList.add("invalid");
      }
      // VALIDAÇÂO ESPECíFICA TIPO EMAIL
      if (
        input.type == "email" &&
        (!input.value.includes("@") || !input.value.includes("."))
      ) {
        input.classList.add("invalid");
      }
      // VALIDAÇÂO ESPECíFICA TIPO URL
      if (input.type == "url") {
        if (
          !input.value.includes("http") ||
          !input.value.includes("://") ||
          !input.value.includes(".")
        ) {
          input.classList.add("invalid");
        } else {
          input.classList.remove("invalid");
        }
      }
      // SEMELHANTES VALIDAÇÔES MAS NO EVENTO DE INPUT
      input.addEventListener("input", (event) => {
        if (input.value.trim() == "") {
          input.classList.add("invalid");
        } else {
          input.classList.remove("invalid");
        }
        if (
          input.type == "email" &&
          (!input.value.includes("@") || !input.value.includes("."))
        ) {
          input.classList.add("invalid");
        } else {
          input.classList.remove("invalid");
        }

        if (input.type == "url") {
          if (
            !input.value.includes("http") ||
            !input.value.includes("://") ||
            !input.value.includes(".")
          ) {
            input.classList.add("invalid");
          } else {
            input.classList.remove("invalid");
          }
        }
      });
    });
  }

  function onSubmit(data: iPortFormModal) {
    const portfolio = dataOrganize(data);
    console.log(portfolio);
    // sendPortifolio(portfolio);
  }

  if (!portCreateAuth) {
    return null;
  }

  return (
    <PortFormModalStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button
          type="button"
          className="button-close"
          onClick={() => {
            setPortCreateAuth(false);
            reset();
          }}
        >
          <CgClose />
        </button>
        <h2>Enter data to generate layout</h2>
        <div className="formInput">
          <label>
            <input
              placeholder="Enter your full name"
              type="text"
              {...register("name")}
            />
            {!errors.name ? (
              <span className="label">Name</span>
            ) : (
              <span>{errors.name.message}</span>
            )}
          </label>
        </div>

        <div className="flex">
          <div className="formInput">
            <label>
              <input
                placeholder="Birth date"
                type="date"
                {...register("birthDate")}
                onInput={(event) => setAgeValue(event)}
              />
              {!errors.birthDate ? (
                <span className="label">Birth Date</span>
              ) : (
                <span>{errors.birthDate.message}</span>
              )}
            </label>
          </div>

          <div className="formInput">
            <label>
              <input
                id="age"
                placeholder="Age"
                type="number"
                defaultValue={0}
                {...register("age")}
                readOnly
              />
              {!errors.age ? (
                <span className="label">Age</span>
              ) : (
                <span>{errors.age.message}</span>
              )}
            </label>
          </div>
        </div>

        <div className="flex">
          <div className="formInput">
            <label>
              <select id="" {...register("gender")}>
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Feminine">Feminine</option>
                <option value="Other">Other</option>
              </select>
              {!errors.gender ? (
                <span className="label">Gender</span>
              ) : (
                <span>{errors.gender.message}</span>
              )}
            </label>
          </div>

          <div className="formInput">
            <label>
              <input
                placeholder="City(ex: city-STATE)"
                type="text"
                {...register("city")}
              />
              {!errors.city ? (
                <span className="label">City</span>
              ) : (
                <span>{errors.city.message}</span>
              )}
            </label>
          </div>
        </div>

        <div className="flex">
          <div className="formInput">
            <label>
              <input
                placeholder="Country"
                type="text"
                {...register("country")}
              />
              {!errors.country ? (
                <span className="label">Country</span>
              ) : (
                <span>{errors.country.message}</span>
              )}
            </label>
          </div>
          <div className="formInput">
            <label>
              <input
                placeholder="zipCode"
                type="number"
                {...register("zipCode")}
              />
              {!errors.zipCode ? (
                <span className="label">ZipCode</span>
              ) : (
                <span>{errors.zipCode.message}</span>
              )}
            </label>
          </div>
        </div>

        <div className="formInput">
          <label>
            <input
              placeholder="ex: street, nº, 
              district, complement"
              type="text"
              {...register("street")}
            />
            {!errors.street ? (
              <span className="label">Street</span>
            ) : (
              <span>{errors.street.message}</span>
            )}
          </label>
        </div>
        <div className="formInput">
          <label>
            <input
              placeholder="Contact email"
              type="email"
              {...register("email")}
            />
            {!errors.email ? (
              <span className="label">Email</span>
            ) : (
              <span>{errors.email.message}</span>
            )}
          </label>
        </div>
        <div className="formInput">
          <label>
            <input
              placeholder="ex: DDD 9XXXXXXXX"
              type="text"
              max="12"
              onInput={(event) => telOrganize(event)}
              {...register("telephone")}
            />
            {!errors.telephone ? (
              <span className="label">Phone number</span>
            ) : (
              <span>{errors.telephone.message}</span>
            )}
          </label>
        </div>
        <div className="formInput">
          <label>
            <input
              placeholder="Github profile(URL)"
              type="url"
              {...register("github_url")}
            />
            {!errors.github_url ? (
              <span className="label">Github profile</span>
            ) : (
              <span>{errors.github_url.message}</span>
            )}
          </label>
        </div>
        <div className="formInput">
          <label>
            <input
              placeholder="Linkedin Profile(URL)"
              type="url"
              {...register("linkedin_url")}
            />
            {!errors.linkedin_url ? (
              <span className="label">Linkedin Profile</span>
            ) : (
              <span>{errors.linkedin_url.message}</span>
            )}
          </label>
        </div>

        <div className="formInput">
          <label>
            <textarea
              maxLength={400}
              wrap="true"
              placeholder="Description about you"
              {...register("aboutYou")}
            ></textarea>
            {!errors.aboutYou ? (
              <span className="label">Description about you</span>
            ) : (
              <span>{errors.aboutYou.message}</span>
            )}
          </label>
        </div>

        <div className="formInput">
          <label>
            <input
              placeholder="Training"
              type="text"
              {...register("training")}
            />
            {!errors.training ? (
              <span className="label">Training</span>
            ) : (
              <span>{errors.training.message}</span>
            )}
          </label>
        </div>

        <div className="formInput">
          <label>
            <textarea
              maxLength={400}
              wrap="true"
              placeholder="Skills"
              {...register("skills")}
            ></textarea>
            {!errors.skills ? (
              <span className="label">Skills</span>
            ) : (
              <span>{errors.skills.message}</span>
            )}
          </label>
        </div>
        <div className="formInput">
          <label>
            <textarea
              maxLength={400}
              wrap="true"
              placeholder="Experience"
              {...register("experience")}
            ></textarea>
            {!errors.experience ? (
              <span className="label">Experience</span>
            ) : (
              <span>{errors.experience.message}</span>
            )}
          </label>
        </div>

        <div className="formInput">
          <label>
            <input
              placeholder="Project image(URL)"
              type="url"
              {...register("projectImage_url")}
            />
            {!errors.projectImage_url ? (
              <span className="label">Project image</span>
            ) : (
              <span>{errors.projectImage_url.message}</span>
            )}
          </label>
        </div>
        <div className="formInput">
          <label>
            <input
              placeholder="Project title"
              type="text"
              {...register("project_title")}
            />
            {!errors.project_title ? (
              <span className="label">Project title</span>
            ) : (
              <span>{errors.project_title.message}</span>
            )}
          </label>
        </div>

        <div className="formInput">
          <label>
            <textarea
              maxLength={400}
              wrap="true"
              placeholder="Project Description"
              {...register("project_description")}
            ></textarea>
            {!errors.project_description ? (
              <span className="label">Project Description</span>
            ) : (
              <span>{errors.project_description.message}</span>
            )}
          </label>
        </div>

        <div className="formInput">
          <label>
            <input
              placeholder="Project deployment(URL)"
              type="url"
              {...register("projectDeploy_url")}
            />
            {!errors.projectDeploy_url ? (
              <span className="label">Project deployment</span>
            ) : (
              <span>{errors.projectDeploy_url.message}</span>
            )}
          </label>
        </div>
        <div className="formInput">
          <label>
            <input
              placeholder="Project repository(URL)"
              type="url"
              {...register("projectRepository_url")}
            />
            {!errors.projectRepository_url ? (
              <span className="label">Project repository</span>
            ) : (
              <span>{errors.projectRepository_url.message}</span>
            )}
          </label>
        </div>
        <div className="formLayouts">
          <p>Select your layout</p>
          <div className="layouts">
            <div className="layoutContent">
              <label>
                <img src={layout1} alt="layout 1" />
                <input
                  type="radio"
                  value={"layout-1"}
                  {...register("selected_layout")}
                  defaultChecked
                />
              </label>
              <span></span>
            </div>
            <div className="layoutContent">
              <label>
                <img src={layout2} alt="layout 2" />
                <input
                  type="radio"
                  value={"layout-2"}
                  {...register("selected_layout")}
                />
              </label>
              <span></span>
            </div>
            <div className="layoutContent">
              <label>
                <img src={layout3} alt="layout 3" />
                <input
                  type="radio"
                  value={"layout-3"}
                  {...register("selected_layout")}
                />
              </label>
              <span></span>
            </div>
          </div>
          <div className="formButtons">
            <button
              type="button"
              className="button-default"
              onClick={() => {
                setPortCreateAuth(false);
                reset();
              }}
            >
              Return
            </button>
            <button
              type="submit"
              onClick={() => inputValidation()}
              className="button-default confirm"
            >
              Confirm
            </button>
          </div>
        </div>
      </form>
    </PortFormModalStyled>
  );
};

export default PortFormModal;
