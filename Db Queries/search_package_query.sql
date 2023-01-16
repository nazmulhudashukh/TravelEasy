SELECT tp.Code, tp.Type, tp.HotelName, tp.Facilities, tp.Location, tp.Duration, tp.AdultPerPersonCost, tp.HotelImages, tp.LocationImages, 
IFNULL(AVG(tr.Rating),0) as Rating
from tms.packages as tp left outer join tms.tour_reviews tr on tp.Code = tr.PackageCode
where tp.Location like '%%' OR tp.HotelName like '%%' OR tp.Type like '%%'
group by tp.Code
LIMIT 0, 5;