import axios from "@/utils/axios";
import {
  addstudent,
  removestudent,
  iserror,
  removeerror,
  addjobs,
  addinternships,
} from "../Reducers/studentReducer";

export const asynccurrentstudent = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student");
    dispatch(addstudent(data.student));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncsignupstudent = (student) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/signup", student);
    asynccurrentstudent();
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncsigninstudent = (student) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/signin", student);
    asynccurrentstudent();
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncsignoutstudent = (student) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/student/signout");
    dispatch(removestudent())
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncupdatestudent = (student) => async (dispatch, getState) => {
  try {
    const {_id} = getState().studentReducer.student;
    const { data } = await axios.post("/student/update/" + _id, student);
    dispatch(asynccurrentstudent())
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncavatarstudent = (avatar) => async (dispatch, getState) => {
  try {
    const {_id} = getState().studentReducer.student;
    const { data } = await axios.post("/student/avatar/" + _id, avatar);
    dispatch(asynccurrentstudent())
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncresetstudentpassword = (password) => async (dispatch, getState) => {
  try {
    const {_id} = getState().studentReducer.student;
    const { data } = await axios.post("/student/reset-password/" + _id, password);
    dispatch(asynccurrentstudent())
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncforgetstudentpassword = (email) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/send-mail/",email);
    dispatch(asynccurrentstudent())
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncotpstudentpassword = (pwd) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/forget-link/",pwd);
    dispatch(asynccurrentstudent())
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncalljobs = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/alljobs/");
    dispatch(addjobs(data.jobs))
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};
export const asyncallinternships = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/allinternships/");
    dispatch(addinternships(data.internships))
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncapplyjobstudent = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/apply/job/" + id);
    dispatch(asynccurrentstudent())
    dispatch(asyncalljobs())
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncapplyineternshipstudent = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/apply/internship/" + id);
    dispatch(asynccurrentstudent())
    dispatch(asyncallinternships())
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

// add education job

export const asyncaddeducation = (edu) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/add-edu/", edu);
    dispatch(asynccurrentstudent())
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncdeleteedustudent = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/delete-edu/" + id);
    dispatch(asynccurrentstudent())
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynceditedustudent = (id, edu) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/edit-edu/" + id, edu);
    dispatch(asynccurrentstudent())
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

//  resume job

export const asyncaddjob = (job) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/add-job/", job);
    dispatch(asynccurrentstudent())
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncdeletejobstudent = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/delete-job/" + id);
    dispatch(asynccurrentstudent())
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynceditjobstudent = (id, job) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/edit-job/" + id, job);
    dispatch(asynccurrentstudent())
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};


//  internships resume section

export const asyncaddinternship = (intern) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/add-internship/", intern);
    dispatch(asynccurrentstudent())
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncdeleteinternstudent = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/delete-internship/" + id);
    dispatch(asynccurrentstudent())
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynceditinternstudent = (id, intern) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/edit-internship/" + id, intern);
    dispatch(asynccurrentstudent())
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};