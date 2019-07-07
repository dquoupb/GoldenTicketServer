

const showFilter = {
    homeShowInfo : (showData) => {
        time = showData.map((e) => e.startTime.substring(0,5).concat(" ~ ", e.endTime.substring(0,5)))
        return {
            show_idx: showData[0].showIdx,
            image_url: showData[0].imageUrl,
            name: showData[0].name,
            location: showData[0].location,
            running_time : time
        }
    },
    detailShowInfo : (showData) => {
    console.log(showData)
    // const date = JSON.stringify(e.date).split('-').join('.').substring(1,11)
    time = showData.map((e) => JSON.stringify(e.date).split('-').join('.').substring(1,11)
    .concat("  ", e.startTime.substring(0,5).concat("~", e.endTime.substring(0,5))))
    const drawAvailable = showData.map((e) => e.drawAvailable)
    return {
        show_idx: showData[0].showIdx,
        image_url: showData[0].imageUrl,
        name: showData[0].name,
        location: showData[0].location,
        date : time,
        draw_available: drawAvailable,
        original_price: showData[0].originalPrice,
        discount_price: showData[0].discountPrice
        }
    },
    homeAllShowInfo : (showData) => {
    runningTime = showData.startTime.substring(0,5).concat(" ~ ", showData.endTime.substring(0,5))
    return {
        show_idx: showData.showIdx,
        image_url: showData.imageUrl,
        name: showData.name,
        location: showData.location,
        running_time : runningTime
        }
    },
    homeAllShowFilter : (showData) => {
    console.log(showData)
    let filteredData = []
    var cnt = 0
    for(let i=0 ;i < Object.keys(showData).length - 1; i++)
    {
        if(showData[i].show_idx == showData[i+1].show_idx)
        {
            showData[i+1].running_time = showData[i].running_time.concat(" / ", showData[i+1].running_time)
            cnt++
        }
        else
        {
            if(cnt >= 2)
            {
                showData[i].running_time = showData[i].running_time.substring(0, 30).concat('...')
            }
            filteredData.push(showData[i])
            cnt = 0
        }
    }
    const last = showData[Object.keys(showData).length -1]
    if(cnt >= 2)
    {
       last.running_time = last.running_time.substring(0, 30).concat('...')
    }
    filteredData.push(showData[Object.keys(showData).length -1])

    return filteredData
    },
}

module.exports = showFilter