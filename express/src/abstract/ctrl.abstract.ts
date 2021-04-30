import { HttpStatus } from "../const/system.const";
import { ResponseObject } from "../model/response.obj";

export abstract class AbstractController {

  public formatResponse(data: any, status = HttpStatus.INTERNAL_ERROR): ResponseObject {
    const options: any = { status };

    status >= 400
    ? options.message = data
    : options.data = data;

    const responseObject = new ResponseObject(options);

    return responseObject;
  }

}