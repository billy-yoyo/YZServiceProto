export const load = ({ params }: { params: { serviceId: string } }) => {
    return {
        serviceId: params.serviceId
    }
}
