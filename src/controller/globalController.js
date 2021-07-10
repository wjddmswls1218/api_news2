import axios from "axios";

export const homeController = async (req, res) => {
  const apiData_all = await axios.get(
    "https://4leaf-crawling.pe.kr/searchGoogle"
  );

  res.render("home", { aData: apiData_all.data });
};

export const socialController = async (req, res) => {
  const apiData_social = await axios.get(
    "https://4leaf-crawling.pe.kr/searchGoogle"
  );

  const newData_social = apiData_social.data.filter(
    (data) => data.type === "사회"
  );
  res.render("social", { sData: newData_social });
};

export const economyController = async (req, res) => {
  const apiData_economy = await axios.get(
    "https://4leaf-crawling.pe.kr/searchGoogle"
  );

  const newData_economy = apiData_economy.data.filter(
    (data) => data.type === "경제"
  );
  res.render("economy", { eData: newData_economy });
};

export const politicsController = async (req, res) => {
  const apiData_polieics = await axios.get(
    "https://4leaf-crawling.pe.kr/searchGoogle"
  );

  const newData_polieics = apiData_polieics.data.filter(
    (data) => data.type === "정치"
  );
  res.render("politics", { pData: newData_polieics });
};
