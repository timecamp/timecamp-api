
import * as C from './constants';
import autobind from 'class-autobind';

export default class Projects {

  constructor(timeCampApi
  ) {
    this.tca = timeCampApi;

    autobind(this);
  }

  async getActiveProjects(){
    return await this.tca.apiRequest.dispatch(
      'get',
      false,
      C.THIS_USER_ACTIVE_PROJECTS
    );
  }

  async create(projectData) {
    return await this.tca.apiRequest.dispatch(
      'post',
      projectData,
      C.THIS_USER_PROJECTS,
    );
  }

}
