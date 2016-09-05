
import * as C from './constants';
import autobind from 'class-autobind';

export default class Projects {

  constructor(timeCampApi
  ) {
    this.tca = timeCampApi;

    autobind(this);
  }

  async create(projectData) {
    return await this.tca.apiRequest.dispatch(
      'post',
      projectData,
      C.THIS_USER_PROJECTS,
    );
  }

}
