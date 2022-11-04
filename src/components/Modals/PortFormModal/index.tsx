import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PortFormModalStyled from "./styles";
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
  genre: string;
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

const schema = yup.object({});

const PortFormModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iPortFormModal>({
    resolver: yupResolver(schema),
  });

  const { portCreateAuth } = useContext(DashboardContext);
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
        case "genre":
          data2.user_profile.genre = data[key];
          delete data2.genre;
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

  function ageRestrict(event: any) {
    const birthYear = event.target.value.slice(0, 4);
    const date = new Date();
    const currentYear = date.getFullYear();
    const maxAge = currentYear - +birthYear;
    const inputAge = document.getElementById("age") as HTMLInputElement;
    inputAge.max = String(maxAge);
    inputAge.min = String(maxAge - 1);
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
        <h2>Insira os dados para gerar o layout</h2>
        <div>
          <input
            placeholder="Enter your full name"
            type="text"
            {...register("name")}
          />
          <span></span>
        </div>

        <div className="flex">
          <div>
            <input
              placeholder="Birth date"
              type="date"
              max="2004-12-31"
              {...register("birthDate")}
              onInput={(event) => ageRestrict(event)}
            />
            <span></span>
          </div>

          <div>
            <input
              id="age"
              placeholder="Age"
              type="number"
              {...register("age")}
            />
            <span></span>
          </div>
        </div>

        <div className="flex">
          <div>
            <span></span>
            <select id="" {...register("genre")}>
              <option value="">Genre</option>
              <option value="Male">Male</option>
              <option value="Feminine">Feminine</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <input
              placeholder="City(ex: city-state)"
              type="text"
              {...register("city")}
            />
            <span></span>
          </div>
        </div>

        <div className="flex">
          <div>
            <input placeholder="Country" type="text" {...register("country")} />
            <span></span>
          </div>
          <div>
            <input placeholder="Cep" type="number" {...register("zipCode")} />
            <span></span>
          </div>
        </div>

        <div>
          <input
            placeholder="Address(ex: street, nº, 
              district, complement)"
            type="text"
            {...register("street")}
          />
          <span></span>
        </div>
        <div>
          <input
            placeholder="Contact email"
            type="email"
            {...register("email")}
          />
          <span></span>
        </div>
        <div>
          <input
            placeholder="Phone number"
            type="number"
            {...register("telephone")}
          />
          <span></span>
        </div>
        <div>
          <input
            placeholder="Github profile"
            type="url"
            {...register("github_url")}
          />
          <span></span>
        </div>
        <div>
          <input
            placeholder="Linkedin Profile"
            type="url"
            {...register("linkedin_url")}
          />
          <span></span>
        </div>

        <div>
          <textarea
            maxLength={400}
            wrap="true"
            placeholder="Description about you"
            {...register("aboutYou")}
          ></textarea>
          <span></span>
        </div>

        <div>
          <input placeholder="Training" type="text" {...register("training")} />
          <span></span>
        </div>

        <div>
          <textarea
            maxLength={400}
            wrap="true"
            placeholder="Skills"
            {...register("skills")}
          ></textarea>
          <span></span>
        </div>
        <div>
          <textarea
            maxLength={400}
            wrap="true"
            placeholder="Experience"
            {...register("experience")}
          ></textarea>
          <span></span>
        </div>

        <div>
          <input
            placeholder="Project image(URL)"
            type="url"
            {...register("projectImage_url")}
          />
          <span></span>
        </div>
        <div>
          <input
            placeholder="Project title"
            type="text"
            {...register("project_title")}
          />
          <span></span>
        </div>

        <div>
          <textarea
            maxLength={400}
            wrap="true"
            placeholder="Project Description"
            {...register("project_description")}
          ></textarea>
          <span></span>
        </div>

        <div>
          <input
            placeholder="Project deployment(URL)"
            type="url"
            {...register("projectDeploy_url")}
          />
          <span></span>
        </div>
        <div>
          <input
            placeholder="Project repository(URL)"
            type="url"
            {...register("projectRepository_url")}
          />
          <span></span>
        </div>
        <div className="formLayouts">
          <p>Selecione seu Layout</p>
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
            <button>Retornar</button>
            <button type="submit">Confirmar</button>
          </div>
        </div>
      </form>
    </PortFormModalStyled>
  );
};

export default PortFormModal;
