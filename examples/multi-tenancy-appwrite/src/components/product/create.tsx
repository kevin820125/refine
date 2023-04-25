import { Create } from "@refinedev/antd";
import { RcFile } from "antd/lib/upload/interface";
import {
    Drawer,
    DrawerProps,
    Form,
    FormProps,
    Input,
    ButtonProps,
    Upload,
    Grid,
} from "antd";
import { normalizeFile, storage, account } from "utility";
import { Permission, Role } from "@refinedev/appwrite";

type CreateProductProps = {
    drawerProps: DrawerProps;
    formProps: FormProps;
    saveButtonProps: ButtonProps;
};

export const CreateProduct: React.FC<CreateProductProps> = ({
    drawerProps,
    formProps,
    saveButtonProps,
}) => {
    const breakpoint = Grid.useBreakpoint();

    return (
        <Drawer
            {...drawerProps}
            width={breakpoint.sm ? "500px" : "100%"}
            bodyStyle={{ padding: 0 }}
        >
            <Create saveButtonProps={saveButtonProps}>
                <Form
                    {...formProps}
                    layout="vertical"
                    initialValues={{
                        isActive: true,
                    }}
                    onFinish={(values) => {
                        return formProps.onFinish?.({
                            ...values,
                            image: JSON.stringify(values.image),
                        });
                    }}
                >
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Description" name="description">
                        <Input />
                    </Form.Item>

                    <Form.Item label="Images">
                        <Form.Item
                            name="image"
                            valuePropName="fileList"
                            normalize={normalizeFile}
                            noStyle
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Upload.Dragger
                                name="file"
                                listType="picture"
                                multiple
                                customRequest={async ({
                                    file,
                                    onError,
                                    onSuccess,
                                }) => {
                                    try {
                                        const rcFile = file as RcFile;

                                        const { $id } =
                                            await storage.createFile(
                                                "default",
                                                rcFile.name,
                                                rcFile,
                                                [Permission.read(Role.any())],
                                            );

                                        const url = storage.getFileView(
                                            "default",
                                            $id,
                                        );

                                        onSuccess?.(
                                            { url },
                                            new XMLHttpRequest(),
                                        );
                                    } catch (error) {
                                        onError?.(new Error("Upload Error"));
                                    }
                                }}
                            >
                                <p className="ant-upload-text">
                                    Drag &amp; drop a file in this area
                                </p>
                            </Upload.Dragger>
                        </Form.Item>
                    </Form.Item>
                </Form>
            </Create>
        </Drawer>
    );
};
