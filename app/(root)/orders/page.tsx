import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { getOrders } from "@/lib/actions/actions";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

const OrdersPage = async () => {
  const { userId } = auth();

  const orders = await getOrders(userId as string);

  // console.log("Orders =>", orders[0].products);

  return (
    <MaxWidthWrapper className="py-5">
      {!orders || orders.length === 0 ? (
        <div className="flex h-screen items-center justify-center flex-col gap-4">
          <p className="text-gray-700 text-center text-heading3-bold">
            You have no orders yet.
          </p>
          <Link
            className={buttonVariants({
              variant: "link",
            })}
            href="/">
            Go back to Home &rarr;
          </Link>
        </div>
      ) : (
        <div>
          <p className="text-heading3-bold text-gray-600 mb-8">
            You have total {orders.length} orders{" "}
          </p>
          <div className="flex flex-col gap-8  text-gray-800">
            {orders?.map((order: TOrderType) => (
              <div className="flex flex-col gap-8 p-4 hover:bg-gray-100 transition-all rounded-md shadow-lg  border">
                <div className="flex gap-20 max-md:flex-col max-md:gap-3">
                  <p className="text-body-bold">
                    {" "}
                    <span className="font-normal">Order ID:</span> {order._id}
                  </p>
                  <p className="text-body-bold">
                    <span className="font-normal">Total Amount:</span> $
                    {order.totalAmount}
                  </p>
                </div>

                <div className="flex flex-wrap gap-8 md:gap-16">
                  {order?.products?.map((orderItem: TOrderItemType) => (
                    <div className="flex gap-4" key={orderItem._id}>
                      <Image
                        src={orderItem?.product?.media[0]}
                        alt={orderItem?.product?.title}
                        width={100}
                        height={100}
                        className="h-[100px] w-[100px] object-cover rounded-lg"
                      />
                      <div>
                        <p className="text-small-medium">
                          Title:{" "}
                          <span className="text-small-bold">
                            {orderItem?.product?.title}
                          </span>
                        </p>
                        {orderItem?.color && (
                          <p className="text-small-medium">
                            Color:{" "}
                            <span className="text-small-bold">
                              {orderItem?.color}
                            </span>
                          </p>
                        )}
                        {orderItem.size && (
                          <p className="text-small-medium">
                            Size:{" "}
                            <span className="text-small-bold">
                              {orderItem?.size}
                            </span>
                          </p>
                        )}

                        <p className="text-small-medium">
                          Unit Price:{" "}
                          <span className="text-small-bold">
                            {orderItem?.product?.price}
                          </span>
                        </p>
                        <p className="text-small-medium">
                          Quantity:{" "}
                          <span className="text-small-bold">
                            {orderItem?.quantity}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </MaxWidthWrapper>
  );
};

export const dynamic = "force-dynamic";

export default OrdersPage;
