import { useEffect, useState } from "react";

function MakeBlock(props) {
  return (
    <div className={props.today == "y" ? "inout-calender-today" : null} onClick={()=>{
        document.querySelector(".teacher .inout .calender").classList.add("calender1")
        document.querySelector(".teacher .inout .upload").style.display = "flex"
    }}>
      <span>{props.date} May</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokWidth="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={
            props.attendance == "p"
              ? "M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              : "M6 18 18 6M6 6l12 12"
          }
        />
      </svg>
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokWidth="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        {props.attendance == "p" ? props.time : "Absent"}
      </p>
    </div>
  );
}
function convertDMSToDD(degrees, minutes, seconds, direction) {
  let dd = degrees + minutes / 60 + seconds / 3600;
  if (direction === "S" || direction === "W") {
    dd = dd * -1;
  }
  return dd;
}
function MakeEmpty(props) {
  return (
    <div className="empty">
      <p>{props.date} May</p>
    </div>
  );
}
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}
function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of Earth in kilometers

  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const radLat1 = toRadians(lat1);
  const radLat2 = toRadians(lat2);

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(radLat1) * Math.cos(radLat2) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const kilometer = R * c;
  return kilometer<1 ? kilometer.toFixed(2) +" m" : kilometer.toFixed(2) + " km"; // Distance in kilometers
}
function InOut() {
  const [today, setToday] = useState(0);
  const [deviceLateLong, setDeviceLateLong] = useState({"lat":0,"long":0});
  const [distance, setDistance] = useState({"phone":0,"img":0});
  console.log("here")
  useEffect(() => {
    let date = new Date();
    setToday((prev) => date.getDate());
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    "Geolocation is not supported by this browser.";
  }

  function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    setDeviceLateLong({"lat":lat,"long":lon})
  }
    function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        "The request to get user location timed out.";
        break;
      case error.UNKNOWN_ERROR:
        "An unknown error occurred.";
        break;
    }
  }
    // document.getElementById('inout-image-upload').addEventListener('change', function(e) {
      
    // });
  }, []);

  return (
    <main className="inout">
      <div className="calender">
        <div className="top">
          <select id="">
            <option value="jan">May</option>
          </select>
          <h1>Attendance</h1>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokWidth="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
            Today
          </button>
        </div>
        {Array.from({ length: 31 }).map((value, index) => {
          return index <= today ? (
            <MakeBlock
              date={index}
              time={`08:${index + 10}`}
              attendance={index % 2 == 0 ? "p" : "a"}
              today={index == today ? "y" : "n"}
            />
          ) : (
            <MakeEmpty date={index} />
          );
        })}
      </div>
      <div className="upload mark">
        <p onClick={()=>{
            document.querySelector(".teacher .inout .calender").classList.remove("calender1")
            document.querySelector(".teacher .inout .upload").style.display = "none"
        }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </p>
        <input type="file" hidden id="inout-image-upload" accept="image/*" onChange={(e)=>{
            const file = e.target.files[0];
      if (!file) return;

        document.querySelector(".teacher .inout .show").style.display="flex"
        document.querySelector(".teacher .inout .upload").style.display = "none"
      
    //   const output = document.getElementById('image-output');
      const reader = new FileReader();

      reader.onload = function() {
        const img = new Image();
        img.src = reader.result;
        document.getElementById('inout-show-image').setAttribute("src",reader.result)

        img.onload = function() {
          EXIF.getData(img, function() {
            const lat = EXIF.getTag(this, "GPSLatitude");
            const lon = EXIF.getTag(this, "GPSLongitude");
            const latRef = EXIF.getTag(this, "GPSLatitudeRef") || "N";
            const lonRef = EXIF.getTag(this, "GPSLongitudeRef") || "E";

            if (lat && lon) {
              const latitude = convertDMSToDD(lat[0], lat[1], lat[2], latRef);
              const longitude = convertDMSToDD(lon[0], lon[1], lon[2], lonRef);
                

            //   college latitue and longitude are : 28.7212879,77.1391954

            //   alert(haversineDistance(latitude,longitude,deviceLateLong["lat"],deviceLateLong['long']))
            console.log(deviceLateLong)
                let phoneDistance = haversineDistance(28.7212879,77.1391954,deviceLateLong['lat'],deviceLateLong['long']);
                let imageDistance = haversineDistance(28.7212879,77.1391954,latitude,longitude);
                if(phoneDistance.includes("km") || imageDistance.includes("km")){
                    console.log("failed")
                    document.querySelector(".teacher .inout .show").classList.add("failed")
                }
              setDistance(prev=>({"phone":phoneDistance,'img':imageDistance}))
            } else {
            //   output.innerHTML = "No GPS data found in the image.";
            }
          });
        };
      };

      reader.readAsDataURL(file);
        }} />
        <label htmlFor="inout-image-upload">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <span>Upload Image</span>
        </label>
      </div>
      <div className="show mark">
        <div className="top">
          <img id="inout-show-image" />
          <h1>
            {today} May <br />
            <span className="success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Marked Present
            </span>
            <span className="failed">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>

                Failed
            </span>
          </h1>
        </div>
        <div className="middle">
          <h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </h2>
          <h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          </h2>
          <p>{distance['img']}</p>
          <p>{distance['phone']}</p>
        </div>
        <h5 className="failed">The Distance is Too large Please try Again</h5>
        <button className="success" onClick={()=>{
            document.querySelector(".teacher .inout .calender").classList.remove("calender1")
            document.querySelector(".teacher .inout .show").style.display = "none"
        }}>
          Done
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
          </svg>
        </button>
        <button className="retry failed" onClick={()=>{
            document.querySelector(".teacher .inout .show").style.display="none"
        document.querySelector(".teacher .inout .upload").style.display = "flex"
      
        }}>Retry<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
</button>
      </div>
    </main>
  );
}

export default InOut;
