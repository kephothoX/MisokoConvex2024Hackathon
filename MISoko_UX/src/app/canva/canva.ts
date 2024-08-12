export interface Canva {
}


export interface Folder {
    _creationTime: Date;
    _id: String;
    canvaTeamID: String;
    canvaUserID: String;
    folderID: String;
    folderName: String;
}

export interface CanvaFolder{
    created_at: Date;
    id: String;
    name: String;
    updated_at: Date;
}


export interface FolderQ {
    folder: Folder
}

export interface FolderE {
    folder: CanvaFolder
}

export interface Design {
    id:  String;
    owner: {
        team_id: String;
        user_id: String;
    };
    thumbnail: {
        height: Number,
        url: String;
        width: Number;
    };
    urls: {
        edit_url: String;
        view_url: String;
    }

}

export interface FolderItem {
    asset: {
        created_at: Date;
        id: String;
        import_status: {
            state: String;
        },
        name: String;
        tags: [],
        thumbnail: {
            height: Number;
            url: String;
            width: Number;
        },
        updated_at: Date;
    },
    type: String;
}

export interface CanvaAsset {
    _creationTime: Date;
    _id: String;
    assetID: String;
    assetName: String;
    canvaTeamID: String;
    canvaUserID: String;
}


export interface Asset{
    created_at: Date;
    id: String;
    import_status: {
        state: String;
    },
    name: String;
    tags: [],
    thumbnail: {
        height: Number
        url: String;
        width: Number
    },
    updated_at: Date
}

export interface AssetQ {
    asset: CanvaAsset;
}