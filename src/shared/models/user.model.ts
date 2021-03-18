import { BaseRecursoModel } from "./base-resource.model";

export class User extends BaseRecursoModel {
  constructor(
    public id?: any,
    public email?: string,
    public status?: string,
    public name?: string,
    public allowedIps?: any[],
    public updateDate?: Date,
    public organization?: Organization,
    public geometryContract?: string,
    public roles?: string[],
    public administrativeRoles?: string[],
    public imageTypes?: ImageType[],
    public groups?: Group[],
    public contracts?: Contract[],
    public limitAreaTotal?: number,
    public hasMosaicLayers?: boolean,
    public limitAreaM2?: number,
    public photoURL?: string
  ) {
    super();
    if(!photoURL) {
      this.photoURL = 'assets/imgs/icons/user.png'
    }
  }

  static fromJson(jsonData: any): User {
    return Object.assign(new User(), jsonData);
  }
}


export interface Contract {
  id: string;
  name: string;
  limitArea: number;
  canAddAOI: boolean;
}

export interface OrganizationMaster {
  id: string;
  name: string;
  eulaFile: string;
}

export interface CustomLayout {
  pathLogo: string;
}

export interface Organization {
  id: string;
  name: string;
  organizationMaster: OrganizationMaster;
  customLayout: CustomLayout;
  planetApiKey: string;
  showQuote: boolean;
  planetApiKeyMosaic: string;
  auditMode: boolean;
  eulaFile: string;
}

export interface ImageType {
  id: number;
  name: string;
  label: string;
}

export interface Group {
}
